:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lexmapr'
.. highlight: bash

lexmapr
=======

.. conda:recipe:: lexmapr
   :replaces_section_title:
   :noindex:

   A Lexicon and Rule\-Based Tool for Translating Short Biomedical Specimen Descriptions into Semantic Web Ontology Terms

   :homepage: https://github.com/LexMapr/lexmapr
   :license: GPL-3.0
   :recipe: /`lexmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexmapr/meta.yaml>`_

   


.. conda:package:: lexmapr

   |downloads_lexmapr| |docker_lexmapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends inflection: 
   :depends nltk: ``3.4.5.*``
   :depends nltk_data: 
   :depends python: ``>=3.6,<3.7.0a0 *_cpython``
   :depends python-dateutil: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends rdflib: 
   :depends wikipedia: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lexmapr

   and update with::

      mamba update lexmapr

  To create a new environment, run::

      mamba create --name myenvname lexmapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lexmapr:<tag>

   (see `lexmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_lexmapr| image:: https://img.shields.io/conda/dn/bioconda/lexmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/lexmapr
   :alt:   (downloads)
.. |docker_lexmapr| image:: https://quay.io/repository/biocontainers/lexmapr/status
   :target: https://quay.io/repository/biocontainers/lexmapr
.. _`lexmapr/tags`: https://quay.io/repository/biocontainers/lexmapr?tab=tags


.. raw:: html

    <script>
        var package = "lexmapr";
        var versions = ["0.7.1","0.7.1","0.7.0","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexmapr/README.html