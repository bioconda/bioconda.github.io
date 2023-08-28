:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irep'
.. highlight: bash

irep
====

.. conda:recipe:: irep
   :replaces_section_title:
   :noindex:

   calculate iRep replication rates from metagenome sequencing

   :homepage: https://github.com/christophertbrown/iRep
   :license: MIT / MIT
   :recipe: /`irep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irep/meta.yaml>`_

   


.. conda:package:: irep

   |downloads_irep| |docker_irep|

   :versions:
      
      

      ``1.1.7-1``,  ``1.1.7-0``

      

   
   :depends lmfit: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install irep

   and update with::

      mamba update irep

  To create a new environment, run::

      mamba create --name myenvname irep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irep:<tag>

   (see `irep/tags`_ for valid values for ``<tag>``)


.. |downloads_irep| image:: https://img.shields.io/conda/dn/bioconda/irep.svg?style=flat
   :target: https://anaconda.org/bioconda/irep
   :alt:   (downloads)
.. |docker_irep| image:: https://quay.io/repository/biocontainers/irep/status
   :target: https://quay.io/repository/biocontainers/irep
.. _`irep/tags`: https://quay.io/repository/biocontainers/irep?tab=tags


.. raw:: html

    <script>
        var package = "irep";
        var versions = ["1.1.7","1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irep/README.html