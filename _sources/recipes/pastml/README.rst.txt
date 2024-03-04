:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pastml'
.. highlight: bash

pastml
======

.. conda:recipe:: pastml
   :replaces_section_title:
   :noindex:

   Ancestral character reconstruction and visualisation for rooted phylogenetic trees.

   :homepage: https://pastml.pasteur.fr
   :documentation: https://pastml.pasteur.fr/help
   
   :developer docs: https://github.com/evolbioinfo/pastml
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pastml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastml/meta.yaml>`_

   PastML provides fast methods for Ancestral Character Reconstruction \(ACR\)
   and visualisation on rooted phylogenetic trees. Given a rooted tree and its
   node annotations\, it can either visualise them as\-is\, or infer ancestral
   node states based on the tip states\, with a selection of maximum likelihood
   and parsimonious methods. The result is then visualised as a zoomable html
   map.



.. conda:package:: pastml

   |downloads_pastml| |docker_pastml|

   :versions:
      
      

      ``1.9.43-0``,  ``1.9.40-0``,  ``1.9.39-0``

      

   
   :depends biopython: ``>=1.70``
   :depends ete3: ``>=3.1.1``
   :depends itolapi: ``>=4.0.0``
   :depends jinja2: ``>=2.11.0``
   :depends numpy: ``>=1.22``
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.5.0``
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

      mamba install pastml

   and update with::

      mamba update pastml

  To create a new environment, run::

      mamba create --name myenvname pastml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pastml:<tag>

   (see `pastml/tags`_ for valid values for ``<tag>``)


.. |downloads_pastml| image:: https://img.shields.io/conda/dn/bioconda/pastml.svg?style=flat
   :target: https://anaconda.org/bioconda/pastml
   :alt:   (downloads)
.. |docker_pastml| image:: https://quay.io/repository/biocontainers/pastml/status
   :target: https://quay.io/repository/biocontainers/pastml
.. _`pastml/tags`: https://quay.io/repository/biocontainers/pastml?tab=tags


.. raw:: html

    <script>
        var package = "pastml";
        var versions = ["1.9.43","1.9.40","1.9.39"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pastml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pastml/README.html