:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rainbow'
.. highlight: bash

rainbow
=======

.. conda:recipe:: rainbow
   :replaces_section_title:
   :noindex:

   Efficient tool for clustering and assembling short reads\, especially for RAD.

   :homepage: https://sourceforge.net/projects/bio-rainbow
   :license: GPL / GPL-2.0-or-later
   :recipe: /`rainbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow/meta.yaml>`_

   


.. conda:package:: rainbow

   |downloads_rainbow| |docker_rainbow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-11</code>,  <code>2.0.4-10</code>,  <code>2.0.4-9</code>,  <code>2.0.4-8</code>,  <code>2.0.4-7</code>,  <code>2.0.4-6</code>,  <code>2.0.4-5</code>,  <code>2.0.4-4</code>,  <code>2.0.4-3</code>,  </span></summary>
      

      ``2.0.4-11``,  ``2.0.4-10``,  ``2.0.4-9``,  ``2.0.4-8``,  ``2.0.4-7``,  ``2.0.4-6``,  ``2.0.4-5``,  ``2.0.4-4``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install rainbow

to add into an existing workspace instead, run::

    pixi add rainbow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rainbow

Alternatively, to install into a new environment, run::

    conda create -n envname rainbow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rainbow:<tag>

(see `rainbow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rainbow| image:: https://img.shields.io/conda/dn/bioconda/rainbow.svg?style=flat
   :target: https://anaconda.org/bioconda/rainbow
   :alt:   (downloads)
.. |docker_rainbow| image:: https://quay.io/repository/biocontainers/rainbow/status
   :target: https://quay.io/repository/biocontainers/rainbow
.. _`rainbow/tags`: https://quay.io/repository/biocontainers/rainbow?tab=tags


.. raw:: html

    <script>
        var package = "rainbow";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rainbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rainbow/README.html