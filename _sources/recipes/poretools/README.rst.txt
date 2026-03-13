:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poretools'
.. highlight: bash

poretools
=========

.. conda:recipe:: poretools
   :replaces_section_title:
   :noindex:

   poretools\: a toolkit for working with nanopore sequencing data from Oxford Nanopore

   :homepage: http://poretools.readthedocs.org/en/latest/
   :license: MIT
   :recipe: /`poretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools/meta.yaml>`_

   


.. conda:package:: poretools

   |downloads_poretools| |docker_poretools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1a1-8</code>,  <code>0.6.1a1-7</code>,  <code>0.6.1a1-6</code>,  <code>0.6.1a1-5</code>,  <code>0.6.1a1-4</code>,  <code>0.6.1a1-3</code>,  <code>0.6.1a0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.6.1a1-8``,  ``0.6.1a1-7``,  ``0.6.1a1-6``,  ``0.6.1a1-5``,  ``0.6.1a1-4``,  ``0.6.1a1-3``,  ``0.6.1a0-0``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: ``>=2.2.0``
   :depends on hdf5: 
   :depends on matplotlib: 
   :depends on pandas: 
   :depends on python: ``<3``
   :depends on seaborn: 

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

    pixi global install poretools

to add into an existing workspace instead, run::

    pixi add poretools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poretools

Alternatively, to install into a new environment, run::

    conda create -n envname poretools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poretools:<tag>

(see `poretools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poretools| image:: https://img.shields.io/conda/dn/bioconda/poretools.svg?style=flat
   :target: https://anaconda.org/bioconda/poretools
   :alt:   (downloads)
.. |docker_poretools| image:: https://quay.io/repository/biocontainers/poretools/status
   :target: https://quay.io/repository/biocontainers/poretools
.. _`poretools/tags`: https://quay.io/repository/biocontainers/poretools?tab=tags


.. raw:: html

    <script>
        var package = "poretools";
        var versions = ["0.6.1a1","0.6.1a1","0.6.1a1","0.6.1a1","0.6.1a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poretools/README.html