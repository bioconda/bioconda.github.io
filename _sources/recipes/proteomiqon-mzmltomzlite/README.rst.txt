:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-mzmltomzlite'
.. highlight: bash

proteomiqon-mzmltomzlite
========================

.. conda:recipe:: proteomiqon-mzmltomzlite
   :replaces_section_title:
   :noindex:

   The tool MzMLToMzLite allows to convert mzML files to mzLite files.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/MzMLToMzLite.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-mzmltomzlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-mzmltomzlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-mzmltomzlite/meta.yaml>`_

   The success of modern proteomics was made possible by constant progression in the field of mass spectrometry. Over the course of the past years quite a few manufacturers of
   mass spectrometers have managed to establish themselfes in the field of biological research. Since aquisition and accession of mass spectra are performance critical processes\,
   various performance optimized\, but vendor specific and closed source formats have been developed to store raw MS data. This comes to the disadvantage for toolchain developers
   which want to provide tools for every scientist regardless of the format of their raw data.



.. conda:package:: proteomiqon-mzmltomzlite

   |downloads_proteomiqon-mzmltomzlite| |docker_proteomiqon-mzmltomzlite|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on dotnet-runtime: ``5.0.*``
   :depends on openssl: ``1.1.*``

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

    pixi global install proteomiqon-mzmltomzlite

to add into an existing workspace instead, run::

    pixi add proteomiqon-mzmltomzlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-mzmltomzlite

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-mzmltomzlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-mzmltomzlite:<tag>

(see `proteomiqon-mzmltomzlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-mzmltomzlite| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-mzmltomzlite.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-mzmltomzlite
   :alt:   (downloads)
.. |docker_proteomiqon-mzmltomzlite| image:: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite
.. _`proteomiqon-mzmltomzlite/tags`: https://quay.io/repository/biocontainers/proteomiqon-mzmltomzlite?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-mzmltomzlite";
        var versions = ["0.0.8","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-mzmltomzlite/README.html