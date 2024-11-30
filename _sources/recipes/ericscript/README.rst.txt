:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ericscript'
.. highlight: bash

ericscript
==========

.. conda:recipe:: ericscript
   :replaces_section_title:
   :noindex:

   EricScript is a computational framework for the discovery of gene fusions in paired end RNA\-seq data. It is able to generate synthetic gene fusions by using the EricScript simulator and calculate a number of statistical measures for evaluating gene fusion detection methods performance with EricScript CalcStats.

   :homepage: https://sites.google.com/site/bioericscript
   :license: GPL3 / GPL3
   :recipe: /`ericscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript/meta.yaml>`_

   


.. conda:package:: ericscript

   |downloads_ericscript| |docker_ericscript|

   :versions:
      
      

      ``0.5.5-5``,  ``0.5.5-4``,  ``0.5.5-3``,  ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``

      

   
   :depends bedtools: 
   :depends blat: 
   :depends bwa: 
   :depends perl: 
   :depends r-ada: 
   :depends r-base: 
   :depends samtools: ``0.1.19.*``
   :depends seqtk: 
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

      mamba install ericscript

   and update with::

      mamba update ericscript

  To create a new environment, run::

      mamba create --name myenvname ericscript

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ericscript:<tag>

   (see `ericscript/tags`_ for valid values for ``<tag>``)


.. |downloads_ericscript| image:: https://img.shields.io/conda/dn/bioconda/ericscript.svg?style=flat
   :target: https://anaconda.org/bioconda/ericscript
   :alt:   (downloads)
.. |docker_ericscript| image:: https://quay.io/repository/biocontainers/ericscript/status
   :target: https://quay.io/repository/biocontainers/ericscript
.. _`ericscript/tags`: https://quay.io/repository/biocontainers/ericscript?tab=tags


.. raw:: html

    <script>
        var package = "ericscript";
        var versions = ["0.5.5","0.5.5","0.5.5","0.5.5","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ericscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ericscript/README.html