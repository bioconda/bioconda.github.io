:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmer'
.. highlight: bash

hmmer
=====

.. conda:recipe:: hmmer
   :replaces_section_title:
   :noindex:

   Biosequence analysis using profile hidden Markov models.

   :homepage: http://hmmer.org
   :documentation: http://hmmer.org/documentation.html
   
   :license: BSD / BSD
   :recipe: /`hmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1000069`, doi: :doi:`10.1142/9781848165632_0019`, doi: :doi:`10.1371/journal.pcbi.1002195`, biotools: :biotools:`hmmer3`, usegalaxy-eu: :usegalaxy-eu:`hmmer_jackhmmer`, usegalaxy-eu: :usegalaxy-eu:`hmmer_phmmer`, usegalaxy-eu: :usegalaxy-eu:`hmmer_nhmmer`

   


.. conda:package:: hmmer

   |downloads_hmmer| |docker_hmmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4-4</code>,  <code>3.4-3</code>,  <code>3.4-2</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3.2-4</code>,  <code>3.3.2-3</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  </span></summary>
      

      ``3.4-4``,  ``3.4-3``,  ``3.4-2``,  ``3.4-1``,  ``3.4-0``,  ``3.3.2-4``,  ``3.3.2-3``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2-3``,  ``3.2-2``,  ``3.2-0``,  ``3.1b2-3``,  ``3.1b2-2``,  ``3.1b2-1``,  ``3.1b2-0``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.3.2-9``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

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

    pixi global install hmmer

to add into an existing workspace instead, run::

    pixi add hmmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmmer

Alternatively, to install into a new environment, run::

    conda create -n envname hmmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmmer:<tag>

(see `hmmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmmer| image:: https://img.shields.io/conda/dn/bioconda/hmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmer
   :alt:   (downloads)
.. |docker_hmmer| image:: https://quay.io/repository/biocontainers/hmmer/status
   :target: https://quay.io/repository/biocontainers/hmmer
.. _`hmmer/tags`: https://quay.io/repository/biocontainers/hmmer?tab=tags


.. raw:: html

    <script>
        var package = "hmmer";
        var versions = ["3.4","3.4","3.4","3.4","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmer/README.html