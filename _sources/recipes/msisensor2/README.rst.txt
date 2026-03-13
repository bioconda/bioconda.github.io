:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor2'
.. highlight: bash

msisensor2
==========

.. conda:recipe:: msisensor2
   :replaces_section_title:
   :noindex:

   MSIsensor2 is a novel algorithm based machine learning\, featuring a large upgrade in the microsatellite instability \(MSI\) detection for tumor only sequencing data\, including Cell\-Free DNA \(cfDNA\)\, Formalin\-Fixed Paraffin\-Embedded\(FFPE\) and other sample types.

   :homepage: https://github.com/niu-lab/msisensor2
   :documentation: https://github.com/niu-lab/msisensor2/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`msisensor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2/meta.yaml>`_

   


.. conda:package:: msisensor2

   |downloads_msisensor2| |docker_msisensor2|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgcc-ng: 
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libstdcxx-ng: 
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install msisensor2

to add into an existing workspace instead, run::

    pixi add msisensor2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msisensor2

Alternatively, to install into a new environment, run::

    conda create -n envname msisensor2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msisensor2:<tag>

(see `msisensor2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msisensor2| image:: https://img.shields.io/conda/dn/bioconda/msisensor2.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor2
   :alt:   (downloads)
.. |docker_msisensor2| image:: https://quay.io/repository/biocontainers/msisensor2/status
   :target: https://quay.io/repository/biocontainers/msisensor2
.. _`msisensor2/tags`: https://quay.io/repository/biocontainers/msisensor2?tab=tags


.. raw:: html

    <script>
        var package = "msisensor2";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor2/README.html