:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moments'
.. highlight: bash

moments
=======

.. conda:recipe:: moments
   :replaces_section_title:
   :noindex:

   Evolutionary inference using SFS and LD statistics.

   :homepage: https://bitbucket.org/simongravel/moments
   :license: MIT
   :recipe: /`moments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moments/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.117.200493`, doi: :doi:`10.1371/journal.pgen.1008204`, doi: :doi:`10.1093/molbev/msz265`

   


.. conda:package:: moments

   |downloads_moments| |docker_moments|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends mpmath: 
   :depends numpy: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moments

   and update with::

      conda update moments

   or use the docker container::

      docker pull quay.io/biocontainers/moments:<tag>

   (see `moments/tags`_ for valid values for ``<tag>``)


.. |downloads_moments| image:: https://img.shields.io/conda/dn/bioconda/moments.svg?style=flat
   :target: https://anaconda.org/bioconda/moments
   :alt:   (downloads)
.. |docker_moments| image:: https://quay.io/repository/biocontainers/moments/status
   :target: https://quay.io/repository/biocontainers/moments
.. _`moments/tags`: https://quay.io/repository/biocontainers/moments?tab=tags


.. raw:: html

    <script>
        var package = "moments";
        var versions = ["1.1.9","1.1.8","1.1.7","1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moments/README.html