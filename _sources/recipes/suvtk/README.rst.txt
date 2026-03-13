:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suvtk'
.. highlight: bash

suvtk
=====

.. conda:recipe:: suvtk
   :replaces_section_title:
   :noindex:

   Tool to submit viral sequences to Genbank.

   :homepage: https://github.com/LanderDC/suvtk
   :documentation: https://landerdc.github.io/suvtk/
   
   :license: GPL-3.0-or-later
   :recipe: /`suvtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suvtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suvtk/meta.yaml>`_

   


.. conda:package:: suvtk

   |downloads_suvtk| |docker_suvtk|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on biopython: ``>=1.83``
   :depends on click: 
   :depends on mmseqs2: ``>=17.b804f``
   :depends on numpy: ``>1.24.4``
   :depends on pandas: ``>=2.0.3``
   :depends on pyrodigal-gv: ``>=0.3.2``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.32.3``
   :depends on scipy: ``>=1.13.1``
   :depends on table2asn: ``>=1.28.1094``
   :depends on taxopy: ``>=0.14.0``

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

    pixi global install suvtk

to add into an existing workspace instead, run::

    pixi add suvtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install suvtk

Alternatively, to install into a new environment, run::

    conda create -n envname suvtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/suvtk:<tag>

(see `suvtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_suvtk| image:: https://img.shields.io/conda/dn/bioconda/suvtk.svg?style=flat
   :target: https://anaconda.org/bioconda/suvtk
   :alt:   (downloads)
.. |docker_suvtk| image:: https://quay.io/repository/biocontainers/suvtk/status
   :target: https://quay.io/repository/biocontainers/suvtk
.. _`suvtk/tags`: https://quay.io/repository/biocontainers/suvtk?tab=tags


.. raw:: html

    <script>
        var package = "suvtk";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suvtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suvtk/README.html