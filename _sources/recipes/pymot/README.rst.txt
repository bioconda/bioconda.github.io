:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymot'
.. highlight: bash

pymot
=====

.. conda:recipe:: pymot
   :replaces_section_title:
   :noindex:

   This is a python implementation which determines the MOTP and MOTA metrics from a set of ground truth tracks and a set of hypothesis tracks given by the tracker to be evaluated.

   :homepage: https://github.com/Videmo/pymot
   :license: All Rights Reserved
   :recipe: /`pymot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot/meta.yaml>`_

   


.. conda:package:: pymot

   |downloads_pymot| |docker_pymot|

   :versions:
      
      

      ``13.09.2016-2``,  ``13.09.2016-1``,  ``13.09.2016-0``

      

   
   :depends munkres: 
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

      mamba install pymot

   and update with::

      mamba update pymot

  To create a new environment, run::

      mamba create --name myenvname pymot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymot:<tag>

   (see `pymot/tags`_ for valid values for ``<tag>``)


.. |downloads_pymot| image:: https://img.shields.io/conda/dn/bioconda/pymot.svg?style=flat
   :target: https://anaconda.org/bioconda/pymot
   :alt:   (downloads)
.. |docker_pymot| image:: https://quay.io/repository/biocontainers/pymot/status
   :target: https://quay.io/repository/biocontainers/pymot
.. _`pymot/tags`: https://quay.io/repository/biocontainers/pymot?tab=tags


.. raw:: html

    <script>
        var package = "pymot";
        var versions = ["13.09.2016","13.09.2016","13.09.2016"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymot/README.html