:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'star'
.. highlight: bash

star
====

.. conda:recipe:: star
   :replaces_section_title:
   :noindex:

   An RNA\-seq read aligner.

   :homepage: https://github.com/alexdobin/STAR
   :documentation: https://github.com/alexdobin/STAR/blob/2.7.11b/doc/STARmanual.pdf
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`star <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star/meta.yaml>`_
   :links: biotools: :biotools:`star`, usegalaxy-eu: :usegalaxy-eu:`rna_starsolo`, usegalaxy-eu: :usegalaxy-eu:`rna_star`

   


.. conda:package:: star

   |downloads_star| |docker_star|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.11b-8</code>,  <code>2.7.11b-7</code>,  <code>2.7.11b-6</code>,  <code>2.7.11b-5</code>,  <code>2.7.11b-4</code>,  <code>2.7.11b-3</code>,  <code>2.7.11b-2</code>,  <code>2.7.11b-1</code>,  <code>2.7.11b-0</code>,  </span></summary>
      

      ``2.7.11b-8``,  ``2.7.11b-7``,  ``2.7.11b-6``,  ``2.7.11b-5``,  ``2.7.11b-4``,  ``2.7.11b-3``,  ``2.7.11b-2``,  ``2.7.11b-1``,  ``2.7.11b-0``,  ``2.7.11a-0``,  ``2.7.10b-1``,  ``2.7.10b-0``,  ``2.7.10a-0``,  ``2.7.9a-0``,  ``2.7.8a-1``,  ``2.7.8a-0``,  ``2.7.7a-0``,  ``2.7.6a-0``,  ``2.7.5c-0``,  ``2.7.5b-0``,  ``2.7.5a-0``,  ``2.7.4a-0``,  ``2.7.3a-1``,  ``2.7.3a-0``,  ``2.7.2c-0``,  ``2.7.2b-0``,  ``2.7.2a-0``,  ``2.7.1a-0``,  ``2.7.0f-0``,  ``2.7.0e-0``,  ``2.7.0d-0``,  ``2.7.0b-0``,  ``2.6.1d-1``,  ``2.6.1d-0``,  ``2.6.1b-0``,  ``2.6.1a-1``,  ``2.6.0c-3``,  ``2.6.0c-2``,  ``2.6.0c-1``,  ``2.6.0c-0``,  ``2.6.0b-0``,  ``2.5.4a-0``,  ``2.5.3a-0``,  ``2.5.2b-0``,  ``2.5.2a-0``,  ``2.5.1b-0``,  ``2.5.0c-0``,  ``2.5.0b-0``,  ``2.5.0a-0``,  ``2.4.2a-0``,  ``2.4.0j-2``,  ``2.4.0j-1``,  ``2.4.0j-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on htslib: ``>=1.21``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
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

    pixi global install star

to add into an existing workspace instead, run::

    pixi add star

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install star

Alternatively, to install into a new environment, run::

    conda create -n envname star

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/star:<tag>

(see `star/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_star| image:: https://img.shields.io/conda/dn/bioconda/star.svg?style=flat
   :target: https://anaconda.org/bioconda/star
   :alt:   (downloads)
.. |docker_star| image:: https://quay.io/repository/biocontainers/star/status
   :target: https://quay.io/repository/biocontainers/star
.. _`star/tags`: https://quay.io/repository/biocontainers/star?tab=tags


.. raw:: html

    <script>
        var package = "star";
        var versions = ["2.7.11b","2.7.11b","2.7.11b","2.7.11b","2.7.11b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star/README.html