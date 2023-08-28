:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourcepredict'
.. highlight: bash

sourcepredict
=============

.. conda:recipe:: sourcepredict
   :replaces_section_title:
   :noindex:

   Classification and prediction of the origin of metagenomic samples

   :homepage: https://github.com/maxibor/sourcepredict
   :license: GPL-3.0-or-later
   :recipe: /`sourcepredict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict/meta.yaml>`_

   


.. conda:package:: sourcepredict

   |downloads_sourcepredict| |docker_sourcepredict|

   :versions:
      
      

      ``0.5-0``

      

   
   :depends ete3: ``>=3.1.1``
   :depends numpy: ``<1.24.0``
   :depends pandas: ``>=0.24.1``
   :depends python: ``>=3.6``
   :depends scikit-bio: ``>=0.5.5``
   :depends scikit-learn: ``>=0.20.1``
   :depends scipy: ``>=1.1.0``
   :depends umap-learn: ``>=0.3.7``
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

      mamba install sourcepredict

   and update with::

      mamba update sourcepredict

  To create a new environment, run::

      mamba create --name myenvname sourcepredict

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sourcepredict:<tag>

   (see `sourcepredict/tags`_ for valid values for ``<tag>``)


.. |downloads_sourcepredict| image:: https://img.shields.io/conda/dn/bioconda/sourcepredict.svg?style=flat
   :target: https://anaconda.org/bioconda/sourcepredict
   :alt:   (downloads)
.. |docker_sourcepredict| image:: https://quay.io/repository/biocontainers/sourcepredict/status
   :target: https://quay.io/repository/biocontainers/sourcepredict
.. _`sourcepredict/tags`: https://quay.io/repository/biocontainers/sourcepredict?tab=tags


.. raw:: html

    <script>
        var package = "sourcepredict";
        var versions = ["0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourcepredict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourcepredict/README.html