:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duphist'
.. highlight: bash

duphist
=======

.. conda:recipe:: duphist
   :replaces_section_title:
   :noindex:

   DupHIST\: A toolkit for duplication history inference via substitution\-based timeframe

   :homepage: https://github.com/minjeongjj/DupHIST
   :license: MIT
   :recipe: /`duphist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphist/meta.yaml>`_

   


.. conda:package:: duphist

   |downloads_duphist| |docker_duphist|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends kakscalculator2: 
   :depends perl: 
   :depends perl-config-tiny: 
   :depends perl-data-dumper: 
   :depends perl-statistics-r: 
   :depends prank: 
   :depends r-agricolae: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-cluster: 
   :depends r-desctools: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-nbclust: 
   :depends r-tictoc: 
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

      mamba install duphist

   and update with::

      mamba update duphist

  To create a new environment, run::

      mamba create --name myenvname duphist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/duphist:<tag>

   (see `duphist/tags`_ for valid values for ``<tag>``)


.. |downloads_duphist| image:: https://img.shields.io/conda/dn/bioconda/duphist.svg?style=flat
   :target: https://anaconda.org/bioconda/duphist
   :alt:   (downloads)
.. |docker_duphist| image:: https://quay.io/repository/biocontainers/duphist/status
   :target: https://quay.io/repository/biocontainers/duphist
.. _`duphist/tags`: https://quay.io/repository/biocontainers/duphist?tab=tags


.. raw:: html

    <script>
        var package = "duphist";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duphist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duphist/README.html