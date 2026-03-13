:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkv'
.. highlight: bash

checkv
======

.. conda:recipe:: checkv
   :replaces_section_title:
   :noindex:

   Assess the quality of metagenome\-assembled viral genomes.

   :homepage: https://bitbucket.org/berkeleylab/checkv
   :license: BSD / Modified BSD
   :recipe: /`checkv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkv/meta.yaml>`_
   :links: biotools: :biotools:`checkv`, doi: :doi:`10.1038/s41587-020-00774-7`

   


.. conda:package:: checkv

   |downloads_checkv| |docker_checkv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-1</code>,  </span></summary>
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on diamond: ``<=2.1.8``
   :depends on hmmer: 
   :depends on importlib-metadata: ``>=0.12``
   :depends on kcounter: 
   :depends on numpy: 
   :depends on prodigal-gv: 
   :depends on psutil: 
   :depends on python: ``>=3.6``
   :depends on requests: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install checkv

to add into an existing workspace instead, run::

    pixi add checkv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install checkv

Alternatively, to install into a new environment, run::

    conda create -n envname checkv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/checkv:<tag>

(see `checkv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_checkv| image:: https://img.shields.io/conda/dn/bioconda/checkv.svg?style=flat
   :target: https://anaconda.org/bioconda/checkv
   :alt:   (downloads)
.. |docker_checkv| image:: https://quay.io/repository/biocontainers/checkv/status
   :target: https://quay.io/repository/biocontainers/checkv
.. _`checkv/tags`: https://quay.io/repository/biocontainers/checkv?tab=tags


.. raw:: html

    <script>
        var package = "checkv";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkv/README.html