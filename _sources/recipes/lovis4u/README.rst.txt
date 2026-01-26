:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lovis4u'
.. highlight: bash

lovis4u
=======

.. conda:recipe:: lovis4u
   :replaces_section_title:
   :noindex:

   Loci Visualisation Tool.

   :homepage: https://art-egorov.github.io/lovis4u/
   :license: BSD-3-Clause AND GPL-3.0 AND WTFPL
   :recipe: /`lovis4u <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lovis4u>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lovis4u/meta.yaml>`_

   


.. conda:package:: lovis4u

   |downloads_lovis4u| |docker_lovis4u|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5.1-0``,  ``0.1.5-0``,  ``0.1.4.1-0``,  ``0.1.1.2-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends configs: 
   :depends distinctipy: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends progress: 
   :depends pyhmmer: 
   :depends python: 
   :depends reportlab: 
   :depends requests: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install lovis4u

   and update with::

      mamba update lovis4u

  To create a new environment, run::

      mamba create --name myenvname lovis4u

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lovis4u:<tag>

   (see `lovis4u/tags`_ for valid values for ``<tag>``)


.. |downloads_lovis4u| image:: https://img.shields.io/conda/dn/bioconda/lovis4u.svg?style=flat
   :target: https://anaconda.org/bioconda/lovis4u
   :alt:   (downloads)
.. |docker_lovis4u| image:: https://quay.io/repository/biocontainers/lovis4u/status
   :target: https://quay.io/repository/biocontainers/lovis4u
.. _`lovis4u/tags`: https://quay.io/repository/biocontainers/lovis4u?tab=tags


.. raw:: html

    <script>
        var package = "lovis4u";
        var versions = ["0.1.7","0.1.6","0.1.5.1","0.1.5","0.1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lovis4u/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lovis4u/README.html