:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bionetcomp'
.. highlight: bash

bionetcomp
==========

.. conda:recipe:: bionetcomp
   :replaces_section_title:
   :noindex:

   BioNetComp\: A Python package for biological network comparison from STRING database.

   :homepage: https://github.com/lmigueel/bionetcomp/
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`bionetcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionetcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionetcomp/meta.yaml>`_

   


.. conda:package:: bionetcomp

   |downloads_bionetcomp| |docker_bionetcomp|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends gseapy: 
   :depends matplotlib-base: 
   :depends networkx: ``>=2.5``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends scipy: ``>=1.6.1``
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

      mamba install bionetcomp

   and update with::

      mamba update bionetcomp

  To create a new environment, run::

      mamba create --name myenvname bionetcomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bionetcomp:<tag>

   (see `bionetcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bionetcomp| image:: https://img.shields.io/conda/dn/bioconda/bionetcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bionetcomp
   :alt:   (downloads)
.. |docker_bionetcomp| image:: https://quay.io/repository/biocontainers/bionetcomp/status
   :target: https://quay.io/repository/biocontainers/bionetcomp
.. _`bionetcomp/tags`: https://quay.io/repository/biocontainers/bionetcomp?tab=tags


.. raw:: html

    <script>
        var package = "bionetcomp";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bionetcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bionetcomp/README.html