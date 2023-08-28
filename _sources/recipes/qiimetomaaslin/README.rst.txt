:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiimetomaaslin'
.. highlight: bash

qiimetomaaslin
==============

.. conda:recipe:: qiimetomaaslin
   :replaces_section_title:
   :noindex:

   Data munging script to change text Qiime OTU tables to pcl\-formatted\, maaslin\-compatible text files

   :homepage: https://huttenhower.sph.harvard.edu/maaslin
   :license: Unknown
   :recipe: /`qiimetomaaslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiimetomaaslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiimetomaaslin/meta.yaml>`_

   


.. conda:package:: qiimetomaaslin

   |downloads_qiimetomaaslin| |docker_qiimetomaaslin|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends blist: 
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install qiimetomaaslin

   and update with::

      mamba update qiimetomaaslin

  To create a new environment, run::

      mamba create --name myenvname qiimetomaaslin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qiimetomaaslin:<tag>

   (see `qiimetomaaslin/tags`_ for valid values for ``<tag>``)


.. |downloads_qiimetomaaslin| image:: https://img.shields.io/conda/dn/bioconda/qiimetomaaslin.svg?style=flat
   :target: https://anaconda.org/bioconda/qiimetomaaslin
   :alt:   (downloads)
.. |docker_qiimetomaaslin| image:: https://quay.io/repository/biocontainers/qiimetomaaslin/status
   :target: https://quay.io/repository/biocontainers/qiimetomaaslin
.. _`qiimetomaaslin/tags`: https://quay.io/repository/biocontainers/qiimetomaaslin?tab=tags


.. raw:: html

    <script>
        var package = "qiimetomaaslin";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiimetomaaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiimetomaaslin/README.html