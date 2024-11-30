:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemini'
.. highlight: bash

gemini
======

.. conda:recipe:: gemini
   :replaces_section_title:
   :noindex:

   a lightweight db framework for disease and population genetics.

   :homepage: https://github.com/arq5x/gemini
   :license: MIT License
   :recipe: /`gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini/meta.yaml>`_
   :links: biotools: :biotools:`GEMINI`, doi: :doi:`10.1371/journal.pcbi.1003153`

   


.. conda:package:: gemini

   |downloads_gemini| |docker_gemini|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.2-6</code>,  <code>0.30.2-5</code>,  <code>0.30.2-4</code>,  <code>0.30.2-3</code>,  <code>0.30.2-2</code>,  <code>0.30.2-1</code>,  <code>0.30.2-0</code>,  <code>0.30.1-0</code>,  <code>0.20.1-7</code>,  </span></summary>
      

      ``0.30.2-6``,  ``0.30.2-5``,  ``0.30.2-4``,  ``0.30.2-3``,  ``0.30.2-2``,  ``0.30.2-1``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.20.1-7``,  ``0.20.1-6``,  ``0.20.1-5``,  ``0.20.1-4``,  ``0.20.1-3``,  ``0.20.1-2``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.20.0a0-0``,  ``0.19.2a-2``,  ``0.19.2a-1``,  ``0.19.2a-0``,  ``0.19.1-3``,  ``0.19.1-2``,  ``0.19.1-1``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.3-1``,  ``0.18.2-1``,  ``0.18.1-3``,  ``0.18.1-2``,  ``0.18.1-1``,  ``0.18.0-8``,  ``0.18.0-7``,  ``0.18.0-6``,  ``0.18.0-5``,  ``0.18.0-4``,  ``0.18a-4``,  ``0.17.3dev1-4``,  ``0.17.3dev1-3``,  ``0.17.3dev0-2``,  ``0.17.3dev0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bcolz: 
   :depends bottle: 
   :depends bx-python: ``>=0.11.0,<0.12.0a0``
   :depends cyvcf2: ``>0.6.5``
   :depends cyvcf2: ``>=0.30.28,<0.31.0a0``
   :depends geneimpacts: 
   :depends grabix: 
   :depends inheritance: 
   :depends ipyparallel: 
   :depends ipython-cluster-helper: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends networkx: 
   :depends numexpr: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends openpyxl: 
   :depends pandas: 
   :depends pybedtools: ``>=0.10.0,<0.11.0a0``
   :depends pysam: ``>=0.22``
   :depends pysam: ``>=0.22.0,<0.23.0a0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-snappy: 
   :depends python_abi: ``3.8.* *_cp38``
   :depends pyyaml: 
   :depends scipy: 
   :depends snappy: ``>=1.2.0,<1.3.0a0``
   :depends sqlalchemy: 
   :depends unidecode: 
   :depends wget: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gemini

   and update with::

      mamba update gemini

  To create a new environment, run::

      mamba create --name myenvname gemini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gemini:<tag>

   (see `gemini/tags`_ for valid values for ``<tag>``)


.. |downloads_gemini| image:: https://img.shields.io/conda/dn/bioconda/gemini.svg?style=flat
   :target: https://anaconda.org/bioconda/gemini
   :alt:   (downloads)
.. |docker_gemini| image:: https://quay.io/repository/biocontainers/gemini/status
   :target: https://quay.io/repository/biocontainers/gemini
.. _`gemini/tags`: https://quay.io/repository/biocontainers/gemini?tab=tags


.. raw:: html

    <script>
        var package = "gemini";
        var versions = ["0.30.2","0.30.2","0.30.2","0.30.2","0.30.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemini/README.html