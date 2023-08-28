:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcli'
.. highlight: bash

qcli
====

.. conda:recipe:: qcli
   :replaces_section_title:
   :noindex:

   qcli

   :homepage: https://pypi.org/project/qcli/
   :license: GPL
   :recipe: /`qcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcli/meta.yaml>`_

   


.. conda:package:: qcli

   |downloads_qcli| |docker_qcli|

   :versions:
      
      

      ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends python: ``<3``
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

      mamba install qcli

   and update with::

      mamba update qcli

  To create a new environment, run::

      mamba create --name myenvname qcli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qcli:<tag>

   (see `qcli/tags`_ for valid values for ``<tag>``)


.. |downloads_qcli| image:: https://img.shields.io/conda/dn/bioconda/qcli.svg?style=flat
   :target: https://anaconda.org/bioconda/qcli
   :alt:   (downloads)
.. |docker_qcli| image:: https://quay.io/repository/biocontainers/qcli/status
   :target: https://quay.io/repository/biocontainers/qcli
.. _`qcli/tags`: https://quay.io/repository/biocontainers/qcli?tab=tags


.. raw:: html

    <script>
        var package = "qcli";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcli/README.html