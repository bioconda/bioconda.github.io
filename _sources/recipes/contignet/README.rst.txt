:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contignet'
.. highlight: bash

contignet
=========

.. conda:recipe:: contignet
   :replaces_section_title:
   :noindex:

   ContigNet\, a deep learning based phage\-host interaction prediction tool

   :homepage: https://github.com/tianqitang1/ContigNet
   :license: OTHER / USC-RL v1.0
   :recipe: /`contignet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac239`

   


.. conda:package:: contignet

   |downloads_contignet| |docker_contignet|

   :versions:
      
      

      ``1.0.1.post3-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tensorboard: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install contignet

   and update with::

      conda update contignet

   or use the docker container::

      docker pull quay.io/biocontainers/contignet:<tag>

   (see `contignet/tags`_ for valid values for ``<tag>``)


.. |downloads_contignet| image:: https://img.shields.io/conda/dn/bioconda/contignet.svg?style=flat
   :target: https://anaconda.org/bioconda/contignet
   :alt:   (downloads)
.. |docker_contignet| image:: https://quay.io/repository/biocontainers/contignet/status
   :target: https://quay.io/repository/biocontainers/contignet
.. _`contignet/tags`: https://quay.io/repository/biocontainers/contignet?tab=tags


.. raw:: html

    <script>
        var package = "contignet";
        var versions = ["1.0.1.post3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contignet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contignet/README.html