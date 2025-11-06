:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pastrami'
.. highlight: bash

pastrami
========

.. conda:recipe:: pastrami
   :replaces_section_title:
   :noindex:

   Pastrami is a novel\, scalable computational algorithm for rapid human ancestry estimation.

   :homepage: https://github.com/healthdisparities/pastrami
   :documentation: https://github.com/healthdisparities/pastrami/blob/v1.0.1/README.md
   
   :license: CC BY-NC-SA 4.0
   :recipe: /`pastrami <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami/meta.yaml>`_

   


.. conda:package:: pastrami

   |downloads_pastrami| |docker_pastrami|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.6-0``,  ``0.9.5-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pathos: 
   :depends plink2: 
   :depends python: ``>=3.8``
   :depends scipy: 
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

      mamba install pastrami

   and update with::

      mamba update pastrami

  To create a new environment, run::

      mamba create --name myenvname pastrami

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pastrami:<tag>

   (see `pastrami/tags`_ for valid values for ``<tag>``)


.. |downloads_pastrami| image:: https://img.shields.io/conda/dn/bioconda/pastrami.svg?style=flat
   :target: https://anaconda.org/bioconda/pastrami
   :alt:   (downloads)
.. |docker_pastrami| image:: https://quay.io/repository/biocontainers/pastrami/status
   :target: https://quay.io/repository/biocontainers/pastrami
.. _`pastrami/tags`: https://quay.io/repository/biocontainers/pastrami?tab=tags


.. raw:: html

    <script>
        var package = "pastrami";
        var versions = ["1.0.1","1.0.0","0.9.6","0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pastrami/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pastrami/README.html