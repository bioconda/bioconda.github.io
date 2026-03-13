:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circlator'
.. highlight: bash

circlator
=========

.. conda:recipe:: circlator
   :replaces_section_title:
   :noindex:

   circlator\: a tool to circularise genome assemblies

   :homepage: https://github.com/sanger-pathogens/circlator
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`circlator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator/meta.yaml>`_

   


.. conda:package:: circlator

   |downloads_circlator| |docker_circlator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-1</code>,  <code>1.5.5-0</code>,  <code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on amos: ``>=3.1.0``
   :depends on bio_assembly_refinement: ``>=0.4.0``
   :depends on bwa: 
   :depends on canu: ``>=1.8``
   :depends on mummer: ``>=3.23``
   :depends on openpyxl: 
   :depends on prodigal: 
   :depends on pyfastaq: ``>=3.12.1``
   :depends on pymummer: ``>=0.9.0``
   :depends on pysam: ``>=0.8.1``
   :depends on python: ``>=3``
   :depends on samtools: 
   :depends on spades: 

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

    pixi global install circlator

to add into an existing workspace instead, run::

    pixi add circlator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circlator

Alternatively, to install into a new environment, run::

    conda create -n envname circlator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circlator:<tag>

(see `circlator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circlator| image:: https://img.shields.io/conda/dn/bioconda/circlator.svg?style=flat
   :target: https://anaconda.org/bioconda/circlator
   :alt:   (downloads)
.. |docker_circlator| image:: https://quay.io/repository/biocontainers/circlator/status
   :target: https://quay.io/repository/biocontainers/circlator
.. _`circlator/tags`: https://quay.io/repository/biocontainers/circlator?tab=tags


.. raw:: html

    <script>
        var package = "circlator";
        var versions = ["1.5.5","1.5.5","1.5.5","1.5.5","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circlator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circlator/README.html