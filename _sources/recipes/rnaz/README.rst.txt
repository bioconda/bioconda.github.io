:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaz'
.. highlight: bash

rnaz
====

.. conda:recipe:: rnaz
   :replaces_section_title:
   :noindex:

   Predicting structural noncoding RNAs.

   :homepage: https://github.com/ViennaRNA/RNAz
   :documentation: https://www.tbi.univie.ac.at/software/RNAz
   
   :license: MIT-like
   :recipe: /`rnaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz/meta.yaml>`_
   :links: biotools: :biotools:`rnaz`, usegalaxy-eu: :usegalaxy-eu:`rnaz_cluster`, usegalaxy-eu: :usegalaxy-eu:`rnaz_randomize_aln`, usegalaxy-eu: :usegalaxy-eu:`rnaz_select_seqs`, usegalaxy-eu: :usegalaxy-eu:`rnaz_window`, usegalaxy-eu: :usegalaxy-eu:`rnaz_annotate`, usegalaxy-eu: :usegalaxy-eu:`rnaz`

   


.. conda:package:: rnaz

   |downloads_rnaz| |docker_rnaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-8</code>,  <code>2.1.1-7</code>,  <code>2.1.1-6</code>,  <code>2.1.1-5</code>,  <code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``2.1.1-8``,  ``2.1.1-7``,  ``2.1.1-6``,  ``2.1.1-5``,  ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
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

    pixi global install rnaz

to add into an existing workspace instead, run::

    pixi add rnaz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaz

Alternatively, to install into a new environment, run::

    conda create -n envname rnaz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaz:<tag>

(see `rnaz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnaz| image:: https://img.shields.io/conda/dn/bioconda/rnaz.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaz
   :alt:   (downloads)
.. |docker_rnaz| image:: https://quay.io/repository/biocontainers/rnaz/status
   :target: https://quay.io/repository/biocontainers/rnaz
.. _`rnaz/tags`: https://quay.io/repository/biocontainers/rnaz?tab=tags


.. raw:: html

    <script>
        var package = "rnaz";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaz/README.html