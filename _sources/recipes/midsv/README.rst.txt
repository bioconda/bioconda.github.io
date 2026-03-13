:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'midsv'
.. highlight: bash

midsv
=====

.. conda:recipe:: midsv
   :replaces_section_title:
   :noindex:

   Python module to convert SAM to MIDSV format.

   :homepage: https://github.com/akikuno/midsv
   :license: MIT
   :recipe: /`midsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv/meta.yaml>`_

   


.. conda:package:: midsv

   |downloads_midsv| |docker_midsv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-0</code>,  <code>0.9.5-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  </span></summary>
      

      ``0.13.1-0``,  ``0.13.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cstag: ``>=1.1.0``
   :depends on python: ``>=3.9.0,<4.0.0``

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

    pixi global install midsv

to add into an existing workspace instead, run::

    pixi add midsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install midsv

Alternatively, to install into a new environment, run::

    conda create -n envname midsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/midsv:<tag>

(see `midsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_midsv| image:: https://img.shields.io/conda/dn/bioconda/midsv.svg?style=flat
   :target: https://anaconda.org/bioconda/midsv
   :alt:   (downloads)
.. |docker_midsv| image:: https://quay.io/repository/biocontainers/midsv/status
   :target: https://quay.io/repository/biocontainers/midsv
.. _`midsv/tags`: https://quay.io/repository/biocontainers/midsv?tab=tags


.. raw:: html

    <script>
        var package = "midsv";
        var versions = ["0.13.1","0.13.0","0.11.1","0.11.0","0.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midsv/README.html