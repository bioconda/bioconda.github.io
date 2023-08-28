:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intermine'
.. highlight: bash

intermine
=========

.. conda:recipe:: intermine
   :replaces_section_title:
   :noindex:

   InterMine WebService client

   :homepage: http://www.intermine.org
   :license: LGPL / GNU Library or Lesser General Public License (LGPL) or BSD License
   :recipe: /`intermine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intermine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intermine/meta.yaml>`_

   InterMine Webservice Client\:A Python API to access bioinformatics data warehouses powered by the InterMine platform.


.. conda:package:: intermine

   |downloads_intermine| |docker_intermine|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-1``,  ``1.11.0-0``,  ``1.10.0-2``,  ``1.10.0-0``,  ``1.09.09-0``,  ``1.09.05-0``

      

   
   :depends lxml: 
   :depends python: 
   :depends requests: 
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

      mamba install intermine

   and update with::

      mamba update intermine

  To create a new environment, run::

      mamba create --name myenvname intermine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/intermine:<tag>

   (see `intermine/tags`_ for valid values for ``<tag>``)


.. |downloads_intermine| image:: https://img.shields.io/conda/dn/bioconda/intermine.svg?style=flat
   :target: https://anaconda.org/bioconda/intermine
   :alt:   (downloads)
.. |docker_intermine| image:: https://quay.io/repository/biocontainers/intermine/status
   :target: https://quay.io/repository/biocontainers/intermine
.. _`intermine/tags`: https://quay.io/repository/biocontainers/intermine?tab=tags


.. raw:: html

    <script>
        var package = "intermine";
        var versions = ["1.13.0","1.12.0","1.11.0","1.11.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intermine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intermine/README.html