:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mkdesigner'
.. highlight: bash

mkdesigner
==========

.. conda:recipe:: mkdesigner
   :replaces_section_title:
   :noindex:

   Genome\-wide design of markers for PCR\-based genotyping from NGS data.

   :homepage: https://github.com/KChigira/mkdesigner
   :license: MIT / MIT
   :recipe: /`mkdesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mkdesigner/meta.yaml>`_

   


.. conda:package:: mkdesigner

   |downloads_mkdesigner| |docker_mkdesigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.4-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.5,<2.0``
   :depends on blast: ``>=2.14.0,<3.0.0``
   :depends on gatk4: ``>=4.4.0.0,<5.0.0.0``
   :depends on matplotlib-base: 
   :depends on pandas: ``>=2.0.2,<3.0.0``
   :depends on picard-slim: ``>=2.18.29,<3.0.0``
   :depends on primer3: ``>=2.6.1,<3.0.0``
   :depends on python: ``>=3.8,<4.0``
   :depends on samtools: ``>=1.6,<2.0``
   :depends on timeout-decorator: 

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

    pixi global install mkdesigner

to add into an existing workspace instead, run::

    pixi add mkdesigner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mkdesigner

Alternatively, to install into a new environment, run::

    conda create -n envname mkdesigner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mkdesigner:<tag>

(see `mkdesigner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mkdesigner| image:: https://img.shields.io/conda/dn/bioconda/mkdesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mkdesigner
   :alt:   (downloads)
.. |docker_mkdesigner| image:: https://quay.io/repository/biocontainers/mkdesigner/status
   :target: https://quay.io/repository/biocontainers/mkdesigner
.. _`mkdesigner/tags`: https://quay.io/repository/biocontainers/mkdesigner?tab=tags


.. raw:: html

    <script>
        var package = "mkdesigner";
        var versions = ["0.5.3","0.5.2","0.5.1","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mkdesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mkdesigner/README.html