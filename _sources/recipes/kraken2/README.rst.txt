:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken2'
.. highlight: bash

kraken2
=======

.. conda:recipe:: kraken2
   :replaces_section_title:
   :noindex:

   Kraken2 is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: https://ccb.jhu.edu/software/kraken2
   :documentation: https://github.com/DerrickWood/kraken2/blob/v2.17.1/docs/MANUAL.markdown
   
   :developer docs: https://github.com/DerrickWood/kraken2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kraken2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2/meta.yaml>`_
   :links: biotools: :biotools:`kraken2`, usegalaxy-eu: :usegalaxy-eu:`kraken2`, doi: :doi:`10.1186/gb-2014-15-3-r46`, doi: :doi:`10.1186/s13059-019-1891-0`

   


.. conda:package:: kraken2

   |downloads_kraken2| |docker_kraken2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.17.1-0</code>,  <code>2.17-0</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.3-4</code>,  <code>2.1.3-3</code>,  <code>2.1.3-2</code>,  <code>2.1.3-1</code>,  <code>2.1.3-0</code>,  </span></summary>
      

      ``2.17.1-0``,  ``2.17-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9beta-0``,  ``2.0.8_beta-2``,  ``2.0.8_beta-1``,  ``2.0.8_beta-0``,  ``2.0.7_beta-3``,  ``2.0.7_beta-2``,  ``2.0.7_beta-1``,  ``2.0.7_beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on blast: 
   :depends on gperftools: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: 
   :depends on rsync: 
   :depends on tar: 
   :depends on wget: 

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

    pixi global install kraken2

to add into an existing workspace instead, run::

    pixi add kraken2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kraken2

Alternatively, to install into a new environment, run::

    conda create -n envname kraken2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kraken2:<tag>

(see `kraken2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kraken2| image:: https://img.shields.io/conda/dn/bioconda/kraken2.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken2
   :alt:   (downloads)
.. |docker_kraken2| image:: https://quay.io/repository/biocontainers/kraken2/status
   :target: https://quay.io/repository/biocontainers/kraken2
.. _`kraken2/tags`: https://quay.io/repository/biocontainers/kraken2?tab=tags


.. raw:: html

    <script>
        var package = "kraken2";
        var versions = ["2.17.1","2.17","2.1.6","2.1.5","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken2/README.html