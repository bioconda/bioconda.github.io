:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimadap'
.. highlight: bash

trimadap
========

.. conda:recipe:: trimadap
   :replaces_section_title:
   :noindex:

   Fast but inaccurate adapter trimmer for Illumina reads.

   :homepage: https://github.com/lh3/trimadap
   :license: MIT / MIT
   :recipe: /`trimadap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap/meta.yaml>`_

   


.. conda:package:: trimadap

   |downloads_trimadap| |docker_trimadap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r11-7</code>,  <code>r11-6</code>,  <code>r11-5</code>,  <code>r11-4</code>,  <code>r11-3</code>,  <code>r11-2</code>,  <code>r11-1</code>,  <code>r11-0</code>,  <code>r10-2</code>,  </span></summary>
      

      ``r11-7``,  ``r11-6``,  ``r11-5``,  ``r11-4``,  ``r11-3``,  ``r11-2``,  ``r11-1``,  ``r11-0``,  ``r10-2``,  ``r10-1``,  ``r10-0``,  ``r9-0``,  ``r2-5``,  ``r2-4``,  ``r2-3``,  ``r2-2``,  ``r2-1``,  ``r2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install trimadap

to add into an existing workspace instead, run::

    pixi add trimadap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trimadap

Alternatively, to install into a new environment, run::

    conda create -n envname trimadap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trimadap:<tag>

(see `trimadap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trimadap| image:: https://img.shields.io/conda/dn/bioconda/trimadap.svg?style=flat
   :target: https://anaconda.org/bioconda/trimadap
   :alt:   (downloads)
.. |docker_trimadap| image:: https://quay.io/repository/biocontainers/trimadap/status
   :target: https://quay.io/repository/biocontainers/trimadap
.. _`trimadap/tags`: https://quay.io/repository/biocontainers/trimadap?tab=tags


.. raw:: html

    <script>
        var package = "trimadap";
        var versions = ["r11","r11","r11","r11","r11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimadap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimadap/README.html