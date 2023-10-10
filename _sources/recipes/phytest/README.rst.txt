:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phytest'
.. highlight: bash

phytest
=======

.. conda:recipe:: phytest
   :replaces_section_title:
   :noindex:

   Quality control for phylogenetic pipelines using pytest

   :homepage: https://github.com/phytest-devs/phytest
   :documentation: https://phytest-devs.github.io/phytest/
   
   :license: MIT
   :recipe: /`phytest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phytest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phytest/meta.yaml>`_

   


.. conda:package:: phytest

   |downloads_phytest| |docker_phytest|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends numpy: ``>=1.22.3``
   :depends pytest: ``>=7.1.1``
   :depends pytest-html: ``>=3.1.1``
   :depends pytest-sugar: ``>=0.9.4``
   :depends pytest-xdist: ``>=3.2.0``
   :depends python: ``>=3.8,<=3.11``
   :depends scipy: ``>=1.8.0``
   :depends treetime: ``>=0.8.6``
   :depends typer: ``>=0.4.1``
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

      mamba install phytest

   and update with::

      mamba update phytest

  To create a new environment, run::

      mamba create --name myenvname phytest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phytest:<tag>

   (see `phytest/tags`_ for valid values for ``<tag>``)


.. |downloads_phytest| image:: https://img.shields.io/conda/dn/bioconda/phytest.svg?style=flat
   :target: https://anaconda.org/bioconda/phytest
   :alt:   (downloads)
.. |docker_phytest| image:: https://quay.io/repository/biocontainers/phytest/status
   :target: https://quay.io/repository/biocontainers/phytest
.. _`phytest/tags`: https://quay.io/repository/biocontainers/phytest?tab=tags


.. raw:: html

    <script>
        var package = "phytest";
        var versions = ["1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phytest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phytest/README.html