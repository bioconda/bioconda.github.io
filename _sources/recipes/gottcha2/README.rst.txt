:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gottcha2'
.. highlight: bash

gottcha2
========

.. conda:recipe:: gottcha2
   :replaces_section_title:
   :noindex:

   Genomic Origin Through Taxonomic CHAllenge \(GOTTCHA\) v2

   :homepage: https://github.com/poeli/GOTTCHA2
   :license: BSD / BSD-3-Clause
   :recipe: /`gottcha2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha2/meta.yaml>`_
   :links: biotools: :biotools:`gottcha2`

   


.. conda:package:: gottcha2

   |downloads_gottcha2| |docker_gottcha2|

   :versions:
      
      

      ``2.1.8.6-0``,  ``2.1.8.5p1-0``

      

   
   :depends biom-format: ``>=2.1.7``
   :depends gawk: 
   :depends minimap2: ``>=2.17``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends tqdm: 
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

      mamba install gottcha2

   and update with::

      mamba update gottcha2

  To create a new environment, run::

      mamba create --name myenvname gottcha2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gottcha2:<tag>

   (see `gottcha2/tags`_ for valid values for ``<tag>``)


.. |downloads_gottcha2| image:: https://img.shields.io/conda/dn/bioconda/gottcha2.svg?style=flat
   :target: https://anaconda.org/bioconda/gottcha2
   :alt:   (downloads)
.. |docker_gottcha2| image:: https://quay.io/repository/biocontainers/gottcha2/status
   :target: https://quay.io/repository/biocontainers/gottcha2
.. _`gottcha2/tags`: https://quay.io/repository/biocontainers/gottcha2?tab=tags


.. raw:: html

    <script>
        var package = "gottcha2";
        var versions = ["2.1.8.6","2.1.8.5p1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gottcha2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gottcha2/README.html