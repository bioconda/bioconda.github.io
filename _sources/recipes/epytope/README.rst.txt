:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epytope'
.. highlight: bash

epytope
=======

.. conda:recipe:: epytope
   :replaces_section_title:
   :noindex:

   A Framework for Epitope Detection and Vaccine Design

   :homepage: https://github.com/KohlbacherLab/epytope
   :documentation: https://epytope.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/KohlbacherLab/epytope/tree/develop
   :license: BSD / BSD
   :recipe: /`epytope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope/meta.yaml>`_

   


.. conda:package:: epytope

   |downloads_epytope| |docker_epytope|

   :versions:
      
      

      ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends h5py: ``<=2.10.0``
   :depends keras: ``<=2.3.1``
   :depends mhcflurry: ``<=1.4.3``
   :depends mhcnuggets: ``2.3.2``
   :depends pandas: ``>=1.3.5``
   :depends pymysql: 
   :depends pyomo: ``>=4.0``
   :depends python: 
   :depends pyvcf3: 
   :depends requests: 
   :depends setuptools: 
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

      mamba install epytope

   and update with::

      mamba update epytope

  To create a new environment, run::

      mamba create --name myenvname epytope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epytope:<tag>

   (see `epytope/tags`_ for valid values for ``<tag>``)


.. |downloads_epytope| image:: https://img.shields.io/conda/dn/bioconda/epytope.svg?style=flat
   :target: https://anaconda.org/bioconda/epytope
   :alt:   (downloads)
.. |docker_epytope| image:: https://quay.io/repository/biocontainers/epytope/status
   :target: https://quay.io/repository/biocontainers/epytope
.. _`epytope/tags`: https://quay.io/repository/biocontainers/epytope?tab=tags


.. raw:: html

    <script>
        var package = "epytope";
        var versions = ["3.3.1","3.3.0","3.2.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epytope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epytope/README.html