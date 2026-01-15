:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scispacy'
.. highlight: bash

scispacy
========

.. conda:recipe:: scispacy
   :replaces_section_title:
   :noindex:

   A full SpaCy pipeline and models for scientific\/biomedical documents.

   :homepage: https://allenai.github.io/scispacy
   :developer docs: https://github.com/allenai/scispacy
   :license: APACHE / Apache-2.0
   :recipe: /`scispacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scispacy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scispacy/meta.yaml>`_

   


.. conda:package:: scispacy

   |downloads_scispacy| |docker_scispacy|

   :versions:
      
      

      ``0.6.2-1``,  ``0.6.2-0``,  ``0.5.5-1``,  ``0.5.5-0``

      

   
   :depends conllu: 
   :depends joblib: 
   :depends nmslib-metabrainz: ``2.1.3``
   :depends numpy: ``<2.0``
   :depends pysbd: 
   :depends python: ``>=3.9,<3.13``
   :depends requests: ``>=2.0.0,<3.0.0``
   :depends scikit-learn: ``>=0.20.3``
   :depends scipy: 
   :depends spacy: ``>=3.7.0,<3.8.0``
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

      mamba install scispacy

   and update with::

      mamba update scispacy

  To create a new environment, run::

      mamba create --name myenvname scispacy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scispacy:<tag>

   (see `scispacy/tags`_ for valid values for ``<tag>``)


.. |downloads_scispacy| image:: https://img.shields.io/conda/dn/bioconda/scispacy.svg?style=flat
   :target: https://anaconda.org/bioconda/scispacy
   :alt:   (downloads)
.. |docker_scispacy| image:: https://quay.io/repository/biocontainers/scispacy/status
   :target: https://quay.io/repository/biocontainers/scispacy
.. _`scispacy/tags`: https://quay.io/repository/biocontainers/scispacy?tab=tags


.. raw:: html

    <script>
        var package = "scispacy";
        var versions = ["0.6.2","0.6.2","0.5.5","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scispacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scispacy/README.html