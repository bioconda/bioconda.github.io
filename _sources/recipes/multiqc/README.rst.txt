:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc'
.. highlight: bash

multiqc
=======

.. conda:recipe:: multiqc
   :replaces_section_title:
   :noindex:

   Create aggregate bioinformatics analysis reports across many samples and tools.

   :homepage: https://multiqc.info
   :documentation: https://multiqc.info/docs
   
   :developer docs: https://github.com/ewels/MultiQC
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`multiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc/meta.yaml>`_
   :links: biotools: :biotools:`multiqc`, usegalaxy-eu: :usegalaxy-eu:`multiqc`, doi: :doi:`10.1093/bioinformatics/btw354`

   


.. conda:package:: multiqc

   |downloads_multiqc| |docker_multiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23-0</code>,  <code>1.22.3-0</code>,  <code>1.22.2-0</code>,  <code>1.22.1-0</code>,  <code>1.22-0</code>,  <code>1.21-0</code>,  <code>1.20-2</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  </span></summary>
      

      ``1.23-0``,  ``1.22.3-0``,  ``1.22.2-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-1``,  ``1.17-0``,  ``1.16-0``,  ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.13a-1``,  ``1.13a-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.10-1``,  ``1.10-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-4``,  ``1.7-3``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``,  ``1.6-0``,  ``1.6a0-2``,  ``1.6a0-1``,  ``1.6a0-0``,  ``1.5-0``,  ``1.5a-0``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-4``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1a0-4``,  ``0.9.1a0-3``,  ``0.9.1a0-2``,  ``0.9.1a0-1``,  ``0.9.1a0-0``,  ``0.9-0``,  ``0.9a-0``,  ``0.8-0``,  ``0.8dev0-0``,  ``0.7.1dev0-1``,  ``0.7.1dev0-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends coloredlogs: 
   :depends humanize: 
   :depends importlib-metadata: 
   :depends jinja2: ``>=3.0.0``
   :depends markdown: 
   :depends numpy: 
   :depends packaging: 
   :depends pillow: ``>=10.2.0``
   :depends plotly: ``>=5.18``
   :depends pyaml-env: 
   :depends pydantic: ``>=2.7.1``
   :depends python: ``>=3.8``
   :depends python-kaleido: 
   :depends pyyaml: ``>=4``
   :depends requests: 
   :depends rich: ``>=10``
   :depends rich-click: 
   :depends spectra: ``>=0.0.10``
   :depends tqdm: 
   :depends typeguard: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install multiqc

   and update with::

      mamba update multiqc

  To create a new environment, run::

      mamba create --name myenvname multiqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multiqc:<tag>

   (see `multiqc/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc| image:: https://img.shields.io/conda/dn/bioconda/multiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc
   :alt:   (downloads)
.. |docker_multiqc| image:: https://quay.io/repository/biocontainers/multiqc/status
   :target: https://quay.io/repository/biocontainers/multiqc
.. _`multiqc/tags`: https://quay.io/repository/biocontainers/multiqc?tab=tags


.. raw:: html

    <script>
        var package = "multiqc";
        var versions = ["1.23","1.22.3","1.22.2","1.22.1","1.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc/README.html