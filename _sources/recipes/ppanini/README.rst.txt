:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanini'
.. highlight: bash

ppanini
=======

.. conda:recipe:: ppanini
   :replaces_section_title:
   :noindex:

   PPANINI\: Prioritization and Prediction of functional Annotations for Novel and Important genes via automated data Network Integration.

   :homepage: http://huttenhower.sph.harvard.edu/ppanini
   :license: MIT
   :recipe: /`ppanini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanini/meta.yaml>`_

   


.. conda:package:: ppanini

   |downloads_ppanini| |docker_ppanini|

   :versions:
      
      

      ``0.7.4-0``,  ``0.6.4-2``,  ``0.6.4-0``,  ``0.6.2-0``

      

   
   :depends biopython: ``>=1.66``
   :depends matplotlib: ``>=2.0.2``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.18.1``
   :depends python: ``<3``
   :depends scikit-learn: ``>=0.14.1``
   :depends scipy: ``>=0.13.0``
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

      mamba install ppanini

   and update with::

      mamba update ppanini

  To create a new environment, run::

      mamba create --name myenvname ppanini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ppanini:<tag>

   (see `ppanini/tags`_ for valid values for ``<tag>``)


.. |downloads_ppanini| image:: https://img.shields.io/conda/dn/bioconda/ppanini.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanini
   :alt:   (downloads)
.. |docker_ppanini| image:: https://quay.io/repository/biocontainers/ppanini/status
   :target: https://quay.io/repository/biocontainers/ppanini
.. _`ppanini/tags`: https://quay.io/repository/biocontainers/ppanini?tab=tags


.. raw:: html

    <script>
        var package = "ppanini";
        var versions = ["0.7.4","0.6.4","0.6.4","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanini/README.html