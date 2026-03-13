:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vadr'
.. highlight: bash

vadr
====

.. conda:recipe:: vadr
   :replaces_section_title:
   :noindex:

   Viral Annotation DefineR \- classification and annotation of viral sequences based on RefSeq annotation

   :homepage: https://github.com/ncbi/vadr
   :license: Public Domain
   :recipe: /`vadr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr/meta.yaml>`_

   


.. conda:package:: vadr

   |downloads_vadr| |docker_vadr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5-1</code>,  <code>1.5-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-1</code>,  </span></summary>
      

      ``1.6.4-1``,  ``1.6.4-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5-1``,  ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.15.0``
   :depends on easel: ``>=0.48``
   :depends on hmmer: ``>=3.4``
   :depends on infernal: ``>=1.1.4``
   :depends on libgcc: ``>=14``
   :depends on minimap2: ``>=2.26``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bio-easel: ``>=0.16``
   :depends on perl-lwp-protocol-https: ``>=6.07``
   :depends on perl-lwp-simple: 
   :depends on perl-net-ssleay: ``>=1.88``
   :depends on sequip: ``>=0.10``
   :depends on sequip: ``>=0.11,<0.12.0a0``
   :depends on wget: 

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

    pixi global install vadr

to add into an existing workspace instead, run::

    pixi add vadr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vadr

Alternatively, to install into a new environment, run::

    conda create -n envname vadr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vadr:<tag>

(see `vadr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vadr| image:: https://img.shields.io/conda/dn/bioconda/vadr.svg?style=flat
   :target: https://anaconda.org/bioconda/vadr
   :alt:   (downloads)
.. |docker_vadr| image:: https://quay.io/repository/biocontainers/vadr/status
   :target: https://quay.io/repository/biocontainers/vadr
.. _`vadr/tags`: https://quay.io/repository/biocontainers/vadr?tab=tags


.. raw:: html

    <script>
        var package = "vadr";
        var versions = ["1.6.4","1.6.4","1.5.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vadr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vadr/README.html