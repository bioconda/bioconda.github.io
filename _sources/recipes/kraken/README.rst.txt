:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken'
.. highlight: bash

kraken
======

.. conda:recipe:: kraken
   :replaces_section_title:
   :noindex:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: https://ccb.jhu.edu/software/kraken
   :developer docs: https://github.com/DerrickWood/kraken
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kraken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken/meta.yaml>`_
   :links: biotools: :biotools:`kraken`, doi: :doi:`10.1186/gb-2014-15-3-r46`

   


.. conda:package:: kraken

   |downloads_kraken| |docker_kraken|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-12</code>,  <code>1.1.1-11</code>,  <code>1.1.1-10</code>,  <code>1.1.1-9</code>,  <code>1.1.1-8</code>,  <code>1.1.1-7</code>,  <code>1.1.1-6</code>,  <code>1.1.1-5</code>,  <code>1.1.1-4</code>,  </span></summary>
      

      ``1.1.1-12``,  ``1.1.1-11``,  ``1.1.1-10``,  ``1.1.1-9``,  ``1.1.1-8``,  ``1.1.1-7``,  ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``,  ``0.10.6_eaf8fb68-4``,  ``0.10.6_eaf8fb68-3``,  ``0.10.6_eaf8fb68-2``,  ``0.10.6_eaf8fb68-1``,  ``0.10.6_eaf8fb68-0``,  ``0.10.5beta-2``,  ``0.10.5beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends on kmer-jellyfish: ``1.*``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

    pixi global install kraken

to add into an existing workspace instead, run::

    pixi add kraken

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kraken

Alternatively, to install into a new environment, run::

    conda create -n envname kraken

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kraken:<tag>

(see `kraken/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kraken| image:: https://img.shields.io/conda/dn/bioconda/kraken.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken
   :alt:   (downloads)
.. |docker_kraken| image:: https://quay.io/repository/biocontainers/kraken/status
   :target: https://quay.io/repository/biocontainers/kraken
.. _`kraken/tags`: https://quay.io/repository/biocontainers/kraken?tab=tags


.. raw:: html

    <script>
        var package = "kraken";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken/README.html