:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyensembl'
.. highlight: bash

pyensembl
=========

.. conda:recipe:: pyensembl
   :replaces_section_title:
   :noindex:

   Python interface to ensembl reference genome metadata

   :homepage: https://github.com/openvax/pyensembl
   :license: Apache / Apache-2.0
   :recipe: /`pyensembl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyensembl/meta.yaml>`_

   


.. conda:package:: pyensembl

   |downloads_pyensembl| |docker_pyensembl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.13-0</code>,  <code>2.3.12-0</code>,  <code>2.3.11-0</code>,  <code>2.3.9-0</code>,  <code>2.3.6-0</code>,  <code>2.3.4-0</code>,  <code>2.3.0-0</code>,  <code>2.2.9-0</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.3.13-0``,  ``2.3.12-0``,  ``2.3.11-0``,  ``2.3.9-0``,  ``2.3.6-0``,  ``2.3.4-0``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.9.4-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.8-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.5-0``,  ``1.8.4-1``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on datacache: ``>=1.1.4``
   :depends on gtfparse: ``>=1.3.0``
   :depends on memoized-property: ``>=1.0.2``
   :depends on numpy: ``>=1.7``
   :depends on pandas: ``>=0.15``
   :depends on pylint: ``>=1.4.4``
   :depends on python: 
   :depends on python-dateutil: ``>=2.5.0``
   :depends on serializable: 
   :depends on six: ``>=1.9.0``
   :depends on tinytimer: 
   :depends on typechecks: ``>=0.0.2``

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

    pixi global install pyensembl

to add into an existing workspace instead, run::

    pixi add pyensembl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyensembl

Alternatively, to install into a new environment, run::

    conda create -n envname pyensembl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyensembl:<tag>

(see `pyensembl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyensembl| image:: https://img.shields.io/conda/dn/bioconda/pyensembl.svg?style=flat
   :target: https://anaconda.org/bioconda/pyensembl
   :alt:   (downloads)
.. |docker_pyensembl| image:: https://quay.io/repository/biocontainers/pyensembl/status
   :target: https://quay.io/repository/biocontainers/pyensembl
.. _`pyensembl/tags`: https://quay.io/repository/biocontainers/pyensembl?tab=tags


.. raw:: html

    <script>
        var package = "pyensembl";
        var versions = ["2.3.13","2.3.12","2.3.11","2.3.9","2.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyensembl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyensembl/README.html