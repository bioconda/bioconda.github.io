:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isescan'
.. highlight: bash

isescan
=======

.. conda:recipe:: isescan
   :replaces_section_title:
   :noindex:

   A python pipeline to identify IS \(Insertion Sequence\) elements in genome and metagenome 

   :homepage: https://github.com/xiezhq/ISEScan
   :license: GNU General Public License
   :recipe: /`isescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isescan/meta.yaml>`_

   


.. conda:package:: isescan

   |downloads_isescan| |docker_isescan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.3-0</code>,  <code>1.7.2.3-4</code>,  <code>1.7.2.3-3</code>,  <code>1.7.2.3-2</code>,  <code>1.7.2.3-1</code>,  <code>1.7.2.3-0</code>,  <code>1.7.2.2.2-0</code>,  <code>1.7.2.2.1-0</code>,  <code>1.7.2.1-0</code>,  </span></summary>
      

      ``1.7.3-0``,  ``1.7.2.3-4``,  ``1.7.2.3-3``,  ``1.7.2.3-2``,  ``1.7.2.3-1``,  ``1.7.2.3-0``,  ``1.7.2.2.2-0``,  ``1.7.2.2.1-0``,  ``1.7.2.1-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.62``
   :depends on blast: ``>=2.2.31``
   :depends on fastcluster: 
   :depends on fraggenescan: ``>=1.32``
   :depends on hmmer: ``>=3.1b2``
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.8``
   :depends on python: ``>=3``
   :depends on scipy: ``>=0.13.1``

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

    pixi global install isescan

to add into an existing workspace instead, run::

    pixi add isescan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isescan

Alternatively, to install into a new environment, run::

    conda create -n envname isescan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isescan:<tag>

(see `isescan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isescan| image:: https://img.shields.io/conda/dn/bioconda/isescan.svg?style=flat
   :target: https://anaconda.org/bioconda/isescan
   :alt:   (downloads)
.. |docker_isescan| image:: https://quay.io/repository/biocontainers/isescan/status
   :target: https://quay.io/repository/biocontainers/isescan
.. _`isescan/tags`: https://quay.io/repository/biocontainers/isescan?tab=tags


.. raw:: html

    <script>
        var package = "isescan";
        var versions = ["1.7.3","1.7.2.3","1.7.2.3","1.7.2.3","1.7.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isescan/README.html