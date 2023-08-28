:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdne'
.. highlight: bash

ibdne
=====

.. conda:recipe:: ibdne
   :replaces_section_title:
   :noindex:

   The IBDNe program estimates the historical effective population size of a homogenous population \(from the output of IDBseq\).

   :homepage: http://faculty.washington.edu/browning/ibdne.html
   :license: Apache v2.0
   :recipe: /`ibdne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdne/meta.yaml>`_

   


.. conda:package:: ibdne

   |downloads_ibdne| |docker_ibdne|

   :versions:
      
      

      ``04Sep15.e78-3``,  ``04Sep15.e78-2``,  ``04Sep15.e78-1``,  ``04Sep15.e78-0``

      

   
   :depends openjdk: ``>=6.0.77``
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

      mamba install ibdne

   and update with::

      mamba update ibdne

  To create a new environment, run::

      mamba create --name myenvname ibdne

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ibdne:<tag>

   (see `ibdne/tags`_ for valid values for ``<tag>``)


.. |downloads_ibdne| image:: https://img.shields.io/conda/dn/bioconda/ibdne.svg?style=flat
   :target: https://anaconda.org/bioconda/ibdne
   :alt:   (downloads)
.. |docker_ibdne| image:: https://quay.io/repository/biocontainers/ibdne/status
   :target: https://quay.io/repository/biocontainers/ibdne
.. _`ibdne/tags`: https://quay.io/repository/biocontainers/ibdne?tab=tags


.. raw:: html

    <script>
        var package = "ibdne";
        var versions = ["04Sep15.e78","04Sep15.e78","04Sep15.e78","04Sep15.e78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdne/README.html