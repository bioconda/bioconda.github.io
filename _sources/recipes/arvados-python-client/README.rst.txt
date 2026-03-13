:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-python-client'
.. highlight: bash

arvados-python-client
=====================

.. conda:recipe:: arvados-python-client
   :replaces_section_title:
   :noindex:

   Arvados client library.

   :homepage: https://github.com/curoverse/arvados/tree/main/sdk/python
   :license: APACHE / Apache-2.0
   :recipe: /`arvados-python-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client/meta.yaml>`_

   Python API for Arvados\, an open source platform for managing and
   analyzing biomedical big data



.. conda:package:: arvados-python-client

   |downloads_arvados-python-client| |docker_arvados-python-client|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.7.4-0</code>,  <code>2.7.3-0</code>,  </span></summary>
      

      ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.7.4-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.3.1-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3.20190402172810-0``,  ``1.3.2.20190402172810-0``,  ``1.3.1.20190402172810-0``,  ``1.3.1.20190301150258-1``,  ``1.3.1.20190301150258-0``,  ``1.3.0.20190221150417-0``,  ``1.3.0.20190205182514-1``,  ``1.3.0.20190205182514-0``,  ``1.3.0.20181130020805-0``,  ``1.2.1-0``,  ``1.2.0.20181121194423-0``,  ``1.2.0.20181109162613-0``,  ``1.2.0.20181108215719-0``,  ``1.2.0.20180905185317-0``,  ``0.1.20171211211613-1``,  ``0.1.20171211211613-0``,  ``0.1.20171010180436-0``,  ``0.1.20170818194607-0``,  ``0.1.20161123074954-0``,  ``0.1.20161031135838-0``,  ``0.1.20160517202250-1``,  ``0.1.20160517202250-0``,  ``0.1.20160412193510-0``,  ``0.1.20160331153549-0``,  ``0.1.20160318153100-0``,  ``0.1.20160301181511-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ciso8601: ``>=2.0.0``
   :depends on google-api-python-client: ``>=2.1.0``
   :depends on google-auth: 
   :depends on httplib2: ``>=0.9.2``
   :depends on pycurl: ``>=7.19.5.1``
   :depends on python: ``>=3.10``
   :depends on setuptools: ``>=40.3.0``
   :depends on websockets: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install arvados-python-client

to add into an existing workspace instead, run::

    pixi add arvados-python-client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arvados-python-client

Alternatively, to install into a new environment, run::

    conda create -n envname arvados-python-client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arvados-python-client:<tag>

(see `arvados-python-client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arvados-python-client| image:: https://img.shields.io/conda/dn/bioconda/arvados-python-client.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-python-client
   :alt:   (downloads)
.. |docker_arvados-python-client| image:: https://quay.io/repository/biocontainers/arvados-python-client/status
   :target: https://quay.io/repository/biocontainers/arvados-python-client
.. _`arvados-python-client/tags`: https://quay.io/repository/biocontainers/arvados-python-client?tab=tags


.. raw:: html

    <script>
        var package = "arvados-python-client";
        var versions = ["3.2.1","3.2.0","3.1.2","3.1.1","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-python-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-python-client/README.html