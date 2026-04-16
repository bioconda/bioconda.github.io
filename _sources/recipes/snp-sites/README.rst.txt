:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-sites'
.. highlight: bash

snp-sites
=========

.. conda:recipe:: snp-sites
   :replaces_section_title:
   :noindex:

   Finds SNP sites from a multi\-FASTA alignment file.

   :homepage: https://github.com/sanger-pathogens/snp-sites
   :documentation: https://sanger-pathogens.github.io/snp-sites
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snp-sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites/meta.yaml>`_

   


.. conda:package:: snp-sites

   |downloads_snp-sites| |docker_snp-sites|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-7</code>,  <code>2.5.1-6</code>,  <code>2.5.1-5</code>,  <code>2.5.1-4</code>,  <code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.4.1-1</code>,  </span></summary>
      

      ``2.5.1-7``,  ``2.5.1-6``,  ``2.5.1-5``,  ``2.5.1-4``,  ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-3``,  ``2.4.0-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``

      
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

    pixi global install snp-sites

to add into an existing workspace instead, run::

    pixi add snp-sites

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snp-sites

Alternatively, to install into a new environment, run::

    conda create -n envname snp-sites

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snp-sites:<tag>

(see `snp-sites/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snp-sites| image:: https://img.shields.io/conda/dn/bioconda/snp-sites.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-sites
   :alt:   (downloads)
.. |docker_snp-sites| image:: https://quay.io/repository/biocontainers/snp-sites/status
   :target: https://quay.io/repository/biocontainers/snp-sites
.. _`snp-sites/tags`: https://quay.io/repository/biocontainers/snp-sites?tab=tags


.. raw:: html

    <script>
        var package = "snp-sites";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-sites/README.html