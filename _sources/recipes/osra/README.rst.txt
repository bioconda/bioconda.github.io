:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'osra'
.. highlight: bash

osra
====

.. conda:recipe:: osra/2.1.0
   :replaces_section_title:
   :noindex:

   OSRA is a utility designed to convert graphical representations of chemical structures\, as they appear in journal articles\, patent documents\, textbooks\, trade magazines etc.\, into SMILES or SDF.

   :homepage: http://cactus.nci.nih.gov/osra/
   :license: Simplified BSD Licence
   :recipe: /`osra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra>`_/`2.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra/2.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra/2.1.0/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_osra`

   


.. conda:package:: osra

   |downloads_osra| |docker_osra|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends on gocr: 
   :depends on graphicsmagick: ``>=1.3.26``
   :depends on libgcc: 
   :depends on ocrad: 
   :depends on poppler: 
   :depends on potrace: 
   :depends on tclap: 
   :depends on tesseract: 

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

    pixi global install osra

to add into an existing workspace instead, run::

    pixi add osra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install osra

Alternatively, to install into a new environment, run::

    conda create -n envname osra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/osra:<tag>

(see `osra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_osra| image:: https://img.shields.io/conda/dn/bioconda/osra.svg?style=flat
   :target: https://anaconda.org/bioconda/osra
   :alt:   (downloads)
.. |docker_osra| image:: https://quay.io/repository/biocontainers/osra/status
   :target: https://quay.io/repository/biocontainers/osra
.. _`osra/tags`: https://quay.io/repository/biocontainers/osra?tab=tags


.. raw:: html

    <script>
        var package = "osra";
        var versions = ["2.1.0","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/osra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/osra/README.html