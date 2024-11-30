:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantiprot'
.. highlight: bash

quantiprot
==========

.. conda:recipe:: quantiprot
   :replaces_section_title:
   :noindex:

   Quantiprot is a Python package for quantitative analysis of protein sequences

   :homepage: https://git.e-science.pl/wdyrka/quantiprot
   :license: MIT / MIT
   :recipe: /`quantiprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantiprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantiprot/meta.yaml>`_

   


.. conda:package:: quantiprot

   |downloads_quantiprot| |docker_quantiprot|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.4-0``

      

   
   :depends numpy: ``>=1.11.0``
   :depends python: 
   :depends requests: ``>=2.10.0``
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

      mamba install quantiprot

   and update with::

      mamba update quantiprot

  To create a new environment, run::

      mamba create --name myenvname quantiprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quantiprot:<tag>

   (see `quantiprot/tags`_ for valid values for ``<tag>``)


.. |downloads_quantiprot| image:: https://img.shields.io/conda/dn/bioconda/quantiprot.svg?style=flat
   :target: https://anaconda.org/bioconda/quantiprot
   :alt:   (downloads)
.. |docker_quantiprot| image:: https://quay.io/repository/biocontainers/quantiprot/status
   :target: https://quay.io/repository/biocontainers/quantiprot
.. _`quantiprot/tags`: https://quay.io/repository/biocontainers/quantiprot?tab=tags


.. raw:: html

    <script>
        var package = "quantiprot";
        var versions = ["0.2.5","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantiprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantiprot/README.html