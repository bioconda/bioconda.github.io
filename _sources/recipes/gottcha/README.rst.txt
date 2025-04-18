:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gottcha'
.. highlight: bash

gottcha
=======

.. conda:recipe:: gottcha
   :replaces_section_title:
   :noindex:

   Genomic Origin Through Taxonomic CHAllenge \(GOTTCHA\)

   :homepage: https://github.com/LANL-Bioinformatics/GOTTCHA
   :license: GNU GPL v3
   :recipe: /`gottcha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha/meta.yaml>`_

   


.. conda:package:: gottcha

   |downloads_gottcha| |docker_gottcha|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bwa: 
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-yaml: 
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

      mamba install gottcha

   and update with::

      mamba update gottcha

  To create a new environment, run::

      mamba create --name myenvname gottcha

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gottcha:<tag>

   (see `gottcha/tags`_ for valid values for ``<tag>``)


.. |downloads_gottcha| image:: https://img.shields.io/conda/dn/bioconda/gottcha.svg?style=flat
   :target: https://anaconda.org/bioconda/gottcha
   :alt:   (downloads)
.. |docker_gottcha| image:: https://quay.io/repository/biocontainers/gottcha/status
   :target: https://quay.io/repository/biocontainers/gottcha
.. _`gottcha/tags`: https://quay.io/repository/biocontainers/gottcha?tab=tags


.. raw:: html

    <script>
        var package = "gottcha";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gottcha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gottcha/README.html