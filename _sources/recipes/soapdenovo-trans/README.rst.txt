:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo-trans'
.. highlight: bash

soapdenovo-trans
================

.. conda:recipe:: soapdenovo-trans
   :replaces_section_title:
   :noindex:

   SOAPdenovo\-Trans is a de novo transcriptome assembler basing on the SOAPdenovo framework\, adapt to alternative splicing and different expression level among transcripts.

   :homepage: http://soap.genomics.org.cn/SOAPdenovo-Trans.html
   :license: GPLv3
   :recipe: /`soapdenovo-trans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo-trans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo-trans/meta.yaml>`_

   


.. conda:package:: soapdenovo-trans

   |downloads_soapdenovo-trans| |docker_soapdenovo-trans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.04-6</code>,  <code>1.04-5</code>,  <code>1.04-4</code>,  <code>1.04-3</code>,  <code>1.04-2</code>,  <code>1.04-1</code>,  <code>1.04-0</code>,  <code>1.03-2</code>,  <code>1.03-1</code>,  </span></summary>
      

      ``1.04-6``,  ``1.04-5``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install soapdenovo-trans

   and update with::

      mamba update soapdenovo-trans

  To create a new environment, run::

      mamba create --name myenvname soapdenovo-trans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapdenovo-trans:<tag>

   (see `soapdenovo-trans/tags`_ for valid values for ``<tag>``)


.. |downloads_soapdenovo-trans| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo-trans.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo-trans
   :alt:   (downloads)
.. |docker_soapdenovo-trans| image:: https://quay.io/repository/biocontainers/soapdenovo-trans/status
   :target: https://quay.io/repository/biocontainers/soapdenovo-trans
.. _`soapdenovo-trans/tags`: https://quay.io/repository/biocontainers/soapdenovo-trans?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo-trans";
        var versions = ["1.04","1.04","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo-trans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo-trans/README.html