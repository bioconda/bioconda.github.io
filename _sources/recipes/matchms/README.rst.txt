:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchms'
.. highlight: bash

matchms
=======

.. conda:recipe:: matchms
   :replaces_section_title:
   :noindex:

   Python library for fuzzy comparison of mass spectrum data and other Python objects.

   :homepage: https://github.com/matchms/matchms
   :documentation: https://matchms.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`matchms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02411`, doi: :doi:`10.1186/s13321-024-00878-1`, biotools: :biotools:`matchms`, usegalaxy-eu: :usegalaxy-eu:`matchms_convert`, usegalaxy-eu: :usegalaxy-eu:`matchms_filtering`, usegalaxy-eu: :usegalaxy-eu:`matchms_fingerprint_similarity`, usegalaxy-eu: :usegalaxy-eu:`matchms_formatter`, usegalaxy-eu: :usegalaxy-eu:`matchms_metadata_export`, usegalaxy-eu: :usegalaxy-eu:`matchms_metadata_match`, usegalaxy-eu: :usegalaxy-eu:`matchms_networking`, usegalaxy-eu: :usegalaxy-eu:`matchms_similarity`, usegalaxy-eu: :usegalaxy-eu:`matchms_spectral_similarity`, usegalaxy-eu: :usegalaxy-eu:`matchms_split`, usegalaxy-eu: :usegalaxy-eu:`matchms_subsetting`, usegalaxy-eu: :usegalaxy-eu:`matchms_metadata_merge`, usegalaxy-eu: :usegalaxy-eu:`matchms_add_key`, usegalaxy-eu: :usegalaxy-eu:`matchms_remove_key`, usegalaxy-eu: :usegalaxy-eu:`matchms_remove_spectra`

   


.. conda:package:: matchms

   |downloads_matchms| |docker_matchms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.31.0-0</code>,  <code>0.30.2-1</code>,  <code>0.30.2-0</code>,  <code>0.30.1-0</code>,  <code>0.30.0-0</code>,  <code>0.29.0-0</code>,  <code>0.28.2-0</code>,  <code>0.28.1-1</code>,  <code>0.28.1-0</code>,  </span></summary>
      

      ``0.31.0-0``,  ``0.30.2-1``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.2-0``,  ``0.28.1-1``,  ``0.28.1-0``,  ``0.27.0-1``,  ``0.27.0-0``,  ``0.26.4-0``,  ``0.26.3-0``,  ``0.26.2-0``,  ``0.26.1-0``,  ``0.25.0-0``,  ``0.24.4-0``,  ``0.24.3-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.22.0-0``,  ``0.21.2-0``,  ``0.21.1-1``,  ``0.21.1-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deprecated: ``>=1.2.14``
   :depends on lxml: ``>=5.4``
   :depends on matplotlib-base: ``>=3.7``
   :depends on networkx: ``>=3.4.2``
   :depends on numba: ``>=0.60.0``
   :depends on numpy: ``>=2.0.0``
   :depends on pandas: ``>=2.2.3``
   :depends on pickydict: ``>=0.4.0``
   :depends on pillow: ``!=9.4.0``
   :depends on pubchempy: 
   :depends on pynndescent: ``>=0.5.13``
   :depends on pyteomics: ``>=4.6``
   :depends on python: ``>=3.10,<3.13``
   :depends on pyyaml: ``>=6.0.1``
   :depends on rdkit: ``>=2024.3.5,<2026.0.0``
   :depends on requests: ``>=2.31.0``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.14.1``
   :depends on sparsestack: ``>=0.6.0``
   :depends on tqdm: ``>=4.65.0``

   :additional platforms:
      

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

    pixi global install matchms

to add into an existing workspace instead, run::

    pixi add matchms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install matchms

Alternatively, to install into a new environment, run::

    conda create -n envname matchms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/matchms:<tag>

(see `matchms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_matchms| image:: https://img.shields.io/conda/dn/bioconda/matchms.svg?style=flat
   :target: https://anaconda.org/bioconda/matchms
   :alt:   (downloads)
.. |docker_matchms| image:: https://quay.io/repository/biocontainers/matchms/status
   :target: https://quay.io/repository/biocontainers/matchms
.. _`matchms/tags`: https://quay.io/repository/biocontainers/matchms?tab=tags


.. raw:: html

    <script>
        var package = "matchms";
        var versions = ["0.31.0","0.30.2","0.30.2","0.30.1","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchms/README.html