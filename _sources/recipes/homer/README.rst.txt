:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homer'
.. highlight: bash

homer
=====

.. conda:recipe:: homer
   :replaces_section_title:
   :noindex:

   Software for motif discovery and next generation sequencing analysis

   :homepage: http://homer.ucsd.edu/homer/index.html
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`homer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer/meta.yaml>`_

   


.. conda:package:: homer

   |downloads_homer| |docker_homer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1-0</code>,  <code>4.11-9</code>,  <code>4.11-8</code>,  <code>4.11-7</code>,  <code>4.11-6</code>,  <code>4.11-5</code>,  <code>4.11-4</code>,  <code>4.11-3</code>,  <code>4.11-2</code>,  </span></summary>
      

      ``5.1-0``,  ``4.11-9``,  ``4.11-8``,  ``4.11-7``,  ``4.11-6``,  ``4.11-5``,  ``4.11-4``,  ``4.11-3``,  ``4.11-2``,  ``4.11-1``,  ``4.11-0``,  ``4.10-0``,  ``4.9.1-6``,  ``4.9.1-5``,  ``4.9.1-4``,  ``4.9.1-3``,  ``4.9.1-2``,  ``4.9.1-1``,  ``4.9.1-0``,  ``4.8.3-3``,  ``4.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on unzip: 
   :depends on wget: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install homer

to add into an existing workspace instead, run::

    pixi add homer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install homer

Alternatively, to install into a new environment, run::

    conda create -n envname homer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/homer:<tag>

(see `homer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_homer| image:: https://img.shields.io/conda/dn/bioconda/homer.svg?style=flat
   :target: https://anaconda.org/bioconda/homer
   :alt:   (downloads)
.. |docker_homer| image:: https://quay.io/repository/biocontainers/homer/status
   :target: https://quay.io/repository/biocontainers/homer
.. _`homer/tags`: https://quay.io/repository/biocontainers/homer?tab=tags


.. raw:: html

    <script>
        var package = "homer";
        var versions = ["5.1","4.11","4.11","4.11","4.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homer/README.html