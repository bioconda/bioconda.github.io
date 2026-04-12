:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pear'
.. highlight: bash

pear
====

.. conda:recipe:: pear
   :replaces_section_title:
   :noindex:

   Paired\-End reAd mergeR

   :homepage: https://sco.h-its.org/exelixis/web/software/pear/
   :license: CC-BY-NC-SA-3.0
   :recipe: /`pear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pear/meta.yaml>`_
   :links: biotools: :biotools:`PEAR`

   


.. conda:package:: pear

   |downloads_pear| |docker_pear|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.6-13</code>,  <code>0.9.6-12</code>,  <code>0.9.6-11</code>,  <code>0.9.6-10</code>,  <code>0.9.6-9</code>,  <code>0.9.6-8</code>,  <code>0.9.6-7</code>,  <code>0.9.6-6</code>,  <code>0.9.6-5</code>,  </span></summary>
      

      ``0.9.6-13``,  ``0.9.6-12``,  ``0.9.6-11``,  ``0.9.6-10``,  ``0.9.6-9``,  ``0.9.6-8``,  ``0.9.6-7``,  ``0.9.6-6``,  ``0.9.6-5``,  ``0.9.6-4``,  ``0.9.6-3``,  ``0.9.6-2``,  ``0.9.6-1``,  ``0.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
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

    pixi global install pear

to add into an existing workspace instead, run::

    pixi add pear

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pear

Alternatively, to install into a new environment, run::

    conda create -n envname pear

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pear:<tag>

(see `pear/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pear| image:: https://img.shields.io/conda/dn/bioconda/pear.svg?style=flat
   :target: https://anaconda.org/bioconda/pear
   :alt:   (downloads)
.. |docker_pear| image:: https://quay.io/repository/biocontainers/pear/status
   :target: https://quay.io/repository/biocontainers/pear
.. _`pear/tags`: https://quay.io/repository/biocontainers/pear?tab=tags


.. raw:: html

    <script>
        var package = "pear";
        var versions = ["0.9.6","0.9.6","0.9.6","0.9.6","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pear/README.html