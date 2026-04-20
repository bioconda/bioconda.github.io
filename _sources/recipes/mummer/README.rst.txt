:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer'
.. highlight: bash

mummer
======

.. conda:recipe:: mummer
   :replaces_section_title:
   :noindex:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: http://mummer.sourceforge.net/
   :license: The Artistic License
   :recipe: /`mummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer/meta.yaml>`_
   :links: biotools: :biotools:`mummer`

   


.. conda:package:: mummer

   |downloads_mummer| |docker_mummer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.23-21</code>,  <code>3.23-20</code>,  <code>3.23-19</code>,  <code>3.23-18</code>,  <code>3.23-17</code>,  <code>3.23-16</code>,  <code>3.23-15</code>,  <code>3.23-14</code>,  <code>3.23-13</code>,  </span></summary>
      

      ``3.23-21``,  ``3.23-20``,  ``3.23-19``,  ``3.23-18``,  ``3.23-17``,  ``3.23-16``,  ``3.23-15``,  ``3.23-14``,  ``3.23-13``,  ``3.23-12``,  ``3.23-11``,  ``3.23-10``,  ``3.23-9``,  ``3.23-8``,  ``3.23-7``,  ``3.23-6``,  ``3.23-5``,  ``3.23-4``,  ``3.23-3``,  ``3.23-2``,  ``3.23-1``,  ``3.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install mummer

to add into an existing workspace instead, run::

    pixi add mummer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mummer

Alternatively, to install into a new environment, run::

    conda create -n envname mummer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mummer:<tag>

(see `mummer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mummer| image:: https://img.shields.io/conda/dn/bioconda/mummer.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer
   :alt:   (downloads)
.. |docker_mummer| image:: https://quay.io/repository/biocontainers/mummer/status
   :target: https://quay.io/repository/biocontainers/mummer
.. _`mummer/tags`: https://quay.io/repository/biocontainers/mummer?tab=tags


.. raw:: html

    <script>
        var package = "mummer";
        var versions = ["3.23","3.23","3.23","3.23","3.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer/README.html