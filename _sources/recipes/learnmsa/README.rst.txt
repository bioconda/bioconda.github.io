:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'learnmsa'
.. highlight: bash

learnmsa
========

.. conda:recipe:: learnmsa
   :replaces_section_title:
   :noindex:

   learnMSA\: Learning and Aligning large Protein Families

   :homepage: https://github.com/Gaius-Augustus/learnMSA
   :license: MIT / MIT
   :recipe: /`learnmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/learnmsa/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giac104`, biotools: :biotools:`learnMSA`

   


.. conda:package:: learnmsa

   |downloads_learnmsa| |docker_learnmsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.13-0</code>,  <code>2.0.12-0</code>,  <code>2.0.11-0</code>,  <code>2.0.10-0</code>,  <code>2.0.1-0</code>,  <code>1.3.4-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``2.0.13-0``,  ``2.0.12-0``,  ``2.0.11-0``,  ``2.0.10-0``,  ``2.0.1-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.69``
   :depends imageio: 
   :depends logomaker: 
   :depends mmseqs2: 
   :depends networkx: 
   :depends pyfamsa: 
   :depends python: ``3.12.*``
   :depends pytorch: ``2.6.*``
   :depends seaborn: 
   :depends sentencepiece: 
   :depends tensorflow: ``2.18.*``
   :depends tf-keras: ``2.18.*``
   :depends transformers: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install learnmsa

   and update with::

      mamba update learnmsa

  To create a new environment, run::

      mamba create --name myenvname learnmsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/learnmsa:<tag>

   (see `learnmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_learnmsa| image:: https://img.shields.io/conda/dn/bioconda/learnmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/learnmsa
   :alt:   (downloads)
.. |docker_learnmsa| image:: https://quay.io/repository/biocontainers/learnmsa/status
   :target: https://quay.io/repository/biocontainers/learnmsa
.. _`learnmsa/tags`: https://quay.io/repository/biocontainers/learnmsa?tab=tags


.. raw:: html

    <script>
        var package = "learnmsa";
        var versions = ["2.0.13","2.0.12","2.0.11","2.0.10","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/learnmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/learnmsa/README.html