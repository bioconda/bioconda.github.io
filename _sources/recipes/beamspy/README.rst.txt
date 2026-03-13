:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beamspy'
.. highlight: bash

beamspy
=======

.. conda:recipe:: beamspy
   :replaces_section_title:
   :noindex:

   BEAMSpy \- Birmingham mEtabolite Annotation for Mass Spectrometry \(Python package\)

   :homepage: https://github.com/computational-metabolomics/beamspy
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`beamspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy/meta.yaml>`_

   


.. conda:package:: beamspy

   |downloads_beamspy| |docker_beamspy|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on biopython: ``<=1.78``
   :depends on matplotlib: 
   :depends on networkx: ``<=2.5``
   :depends on numpy: 
   :depends on pandas: ``<=1.5.3``
   :depends on pyside2: 
   :depends on pyteomics: ``<=4.4.1``
   :depends on python: ``>3.8,<3.11``
   :depends on requests: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tqdm: 

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

    pixi global install beamspy

to add into an existing workspace instead, run::

    pixi add beamspy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beamspy

Alternatively, to install into a new environment, run::

    conda create -n envname beamspy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beamspy:<tag>

(see `beamspy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beamspy| image:: https://img.shields.io/conda/dn/bioconda/beamspy.svg?style=flat
   :target: https://anaconda.org/bioconda/beamspy
   :alt:   (downloads)
.. |docker_beamspy| image:: https://quay.io/repository/biocontainers/beamspy/status
   :target: https://quay.io/repository/biocontainers/beamspy
.. _`beamspy/tags`: https://quay.io/repository/biocontainers/beamspy?tab=tags


.. raw:: html

    <script>
        var package = "beamspy";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beamspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beamspy/README.html